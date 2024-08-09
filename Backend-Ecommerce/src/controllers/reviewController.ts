import { Review } from "../services/models/modelReview";
import { Request, Response } from 'express';

const getReviewProduct = async (req: Request, res: Response): Promise<void> => {
    const idProduct = req.params.id;
    try {
        const searchReviews = await Review.find({ product_id: idProduct });
        if (searchReviews.length === 0) {
            res.status(404).json({ message: 'No reviews found for this product.' });
            return;
        }
        res.status(200).json(searchReviews);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const makeReview = async (req: Request, res: Response): Promise<void> => {
    const { idProduct, idUser, calification, comment } = req.body;
    try {
        const review = new Review({ product_id: idProduct, user_id: idUser, calification, comment });
        await review.save();
        res.status(201).json({ message: 'Review successfully created', review });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const deleteReview = async (req: Request, res: Response): Promise<void> => {
    const { idProduct, idUser } = req.body;
    try {
        const deleteReview = await Review.findOneAndUpdate(
            { product_id: idProduct, user_id: idUser },
            { isDeleted: true, deleteAt: Date.now() },
            { new: true }
        );
        if (!deleteReview) {
            res.status(400).json({ message: 'Error deleting review' });
            return;
        }
        res.status(200).json({ message: 'Review successfully deleted', deleteReview });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const updateReview = async (req: Request, res: Response): Promise<void> => {
    const { idProduct, idUser, calification, comment } = req.body;
    try {
        const updateReview = await Review.findOneAndUpdate(
            { product_id: idProduct, user_id: idUser },
            { comment, calification },
            { new: true }
        );
        if (!updateReview) {
            res.status(400).json({ message: 'Error updating review' });
            return;
        }
        res.status(200).json({ message: 'Review successfully updated', updateReview });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

export default {
    getReviewProduct,
    makeReview,
    updateReview,
    deleteReview
}
