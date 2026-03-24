const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Configuration
const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'portfolio'
};

// Create Sequelize instance
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Define Message model directly
const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Name is required'
      },
      len: {
        args: [1, 100],
        msg: 'Name cannot exceed 100 characters'
      }
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Email is required'
      },
      isEmail: {
        msg: 'Please provide a valid email address'
      }
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Message is required'
      },
      len: {
        args: [1, 2000],
        msg: 'Message cannot exceed 2000 characters'
      }
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'messages',
  timestamps: true
});

// Function to create database if not exists
const createDatabaseIfNotExists = async () => {
  try {
    // Connect without database to create it
    const connection = await mysql.createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password
    });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``);
    console.log(`✅ Database '${dbConfig.database}' created or already exists`);
    await connection.end();
  } catch (err) {
    console.log('⚠️ Could not create database:', err.message);
  }
};

// Test MySQL connection and sync models
const initDatabase = async () => {
  try {
    // First create the database if needed
    await createDatabaseIfNotExists();
    
    // Then connect to the database
    await sequelize.authenticate();
    console.log('✅ MySQL connected successfully');
    
    // Sync all models - force sync to create table
    await sequelize.sync({ force: false, alter: true });
    console.log('✅ Database synchronized');
    
  } catch (err) {
    console.log('⚠️ MySQL not available - messages will not be persisted');
    console.log('   Error:', err.message);
  }
};

initDatabase();

// Make sequelize and Message model available to routes
app.set('sequelize', sequelize);
app.set('Message', Message);

// Routes
app.use('/api/contact', contactRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

