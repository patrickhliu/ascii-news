//import React from 'react';
import NintendoGame from '../models/NintendoGame.ts';

export const SayHello = async (req: any, res: any) => {
    console.log(req.query);
    console.log(req.params);

    let constraints = {
        where: {
            //is_featured:true,
            id: 16,
        },
        //offset: skip,
        //limit: take,
    };

    let dbResults = await NintendoGame.findAll(constraints);
    console.log(dbResults);

    return res.status(200).json({ msg: 'hello ' + req.params.name });
};
