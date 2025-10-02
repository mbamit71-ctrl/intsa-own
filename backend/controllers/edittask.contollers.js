import express from "express";
import mongoose from "mongoose";
import newTask from "../models/newtask.model.js";

const editTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { taskname, time, priority, compornot } = req.body; 

        if (!id) {
            return res.status(400).json({
                message: "Task ID is required",
                success: false
            });
        }

        const updatedTask = await newTask.findByIdAndUpdate(
            id,
            { taskname, time, priority, compornot },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Task updated successfully ✅",
            success: true,
            updatedTask
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error ❌",
            success: false
        });
    }
};

export default editTask;
