import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../config/jsw";

export const authAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const decoded = verifyToken(token);

    if (decoded.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden' });
      return;
    }

    res.locals.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};

export const authUser = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const decoded = verifyToken(token);

    res.locals.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};
