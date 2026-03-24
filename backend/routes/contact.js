const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Get Message model from app
    const MessageModel = req.app.get('Message');

    // Save message to MySQL database
    const newMessage = await MessageModel.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    });

    // Send email notification to admin (if configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.ADMIN_EMAIL) {
      try {
        const transporter = createTransporter();
        
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.ADMIN_EMAIL,
          subject: `New Portfolio Contact: ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
              <h2 style="color: #0a192f;">New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                ${message}
              </div>
              <p style="color: #888; font-size: 12px; margin-top: 20px;">
                Sent from your portfolio website
              </p>
            </div>
          `
        });
      } catch (emailError) {
        console.error('Email notification error:', emailError.message);
        // Continue even if email fails - message is already saved
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// GET /api/contact - Get all messages (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const MessageModel = req.app.get('Message');
    
    const messages = await MessageModel.findAll({
      order: [['createdAt', 'DESC']]
    });
    
    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    });
  }
});

module.exports = router;

