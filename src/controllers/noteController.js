const noteModel = require("../models/note");

const createNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = new noteModel({
    title: title,
    description: description,
    userId: req.userId,
  });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateNote = async (req, res) => {
    const id = req.params.id;
    const {title, description} = req.body;

    const newNote = {
        title: title,
        description: description,
        userId: req.userId
    }

    try {
        await noteModel.findByIdAndUpdate(id, newNote, {new: true});
        res.status(200).json(newNote);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        noteModel.deleteOne({ _id: id }).then((result) => { 
            res.status(202).json(result);
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getNote = async (req, res) => {
  try {
    const notes = await noteModel.find({userId: req.userId});
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createNote, updateNote, deleteNote, getNote };
