import { Router } from 'express';
import db from '../db';

const router = Router();

router.post('/', (req, res) => {
    const { user_id, reservation_date, reservation_time, guests, special_request } = req.body;
    
    db.query(
        'INSERT INTO reservations SET ?',
        {
            user_id,
            reservation_date,
            reservation_time,
            guests,
            special_request: special_request || null,
            status: 'pending'
        },
        (err, result: any) => {
            if (err) {
                console.error('❌ Error MySQL:', err.message);
                return res.status(500).json({ 
                    error: 'Error al crear reserva',
                    details: err.message 
                });
            }
            res.status(201).json({
                id: result.insertId,
                user_id,
                reservation_date,
                reservation_time,
                guests,
                special_request,
                status: 'pending'
            });
        }
    );
});

router.get('/', (req, res) => {
    db.query(
        'SELECT * FROM reservations',
        (err, results) => {
            if (err) {
                console.error('❌ Error MySQL:', err.message);
                return res.status(500).json({ 
                    error: 'Error al obtener reservas' 
                });
            }
            res.status(200).json(results);
        }
    );
});

export default router;