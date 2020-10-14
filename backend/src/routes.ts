import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';


import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages',upload.array('images') , OrphanagesController.create);
  
export default routes;
/*{
	"name":"Lar das meninas",
	"latitude": -15.5975602,
	"longitude": -56.0709951,
	"about": "Sobre o orfanato",
	"instructions":"Venha visitar",
	"opening_hours":"Das 8h até 18h",
	"open_on_weekends":true
}*/