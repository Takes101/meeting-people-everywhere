const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    writtenBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
