import { Router } from 'express';
import db from '../db';

const router = Router();

router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    
    db.query(
        'INSERT INTO users SET ?',
        { username, email, password },
        (err, result: any) => {
            if (err) {
                console.error('❌ Error MySQL:', err.message);
                return res.status(500).json({ 
                    error: 'Error al crear usuario',
                    details: err.message.includes('ER_DUP_ENTRY') 
                        ? 'El usuario o email ya existe' 
                        : err.message
                });
            }
            res.status(201).json({
                id: result.insertId,
                username,
                email
            });
        }
    );
});

router.get('/', (req, res) => {
    db.query(
        'SELECT id, username, email, created_at FROM users',
        (err, results) => {
            if (err) {
                console.error('❌ Error MySQL:', err.message);
                return res.status(500).json({ 
                    error: 'Error al obtener usuarios' 
                });
            }
            res.status(200).json(results);
        }
    );
});

export default router;