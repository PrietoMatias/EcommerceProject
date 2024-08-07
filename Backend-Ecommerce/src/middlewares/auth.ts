import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../config/jsw'; // Asegúrate de ajustar la importación según tu configuración


export const auth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const decoded = verifyToken(token);
    console.log('Decoded token:', decoded);
    if (decoded.role !== 'admin' && decoded.role !== 'user') {
      res.status(403).json({ message: 'Forbidden' });
      return;
    }

    res.locals.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};
