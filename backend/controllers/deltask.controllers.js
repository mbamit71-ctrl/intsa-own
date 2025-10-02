import express from "express"
import mongoose from "mongoose"
import newTask from "../models/newtask.model.js"

const delTask = async (req, res) => {
    try {
        const {id} = req.params;

        if (!id) {
            return res.status(400).json({
                message: "Task ID is required",
                success: false
            });
        }

        const deletedTask = await newTask.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Task deleted successfully",
            success: true,
            deletedTask
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

export default delTask;
