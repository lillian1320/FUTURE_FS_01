// Internal in-memory message storage
// This replaces MongoDB for message storage

class MessageStore {
  constructor() {
    this.messages = [];
    this.nextId = 1;
  }

  // Add a new message
  add(name, email, message) {
    const newMessage = {
      id: this.nextId++,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date()
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  // Get all messages (sorted by newest first)
  getAll() {
    return [...this.messages].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  // Get message by ID
  getById(id) {
    return this.messages.find(msg => msg.id === id);
  }

  // Delete message by ID
  delete(id) {
    const index = this.messages.findIndex(msg => msg.id === id);
    if (index !== -1) {
      return this.messages.splice(index, 1)[0];
    }
    return null;
  }

  // Get count of messages
  count() {
    return this.messages.length;
  }
}

// Export a singleton instance
module.exports = new MessageStore();

