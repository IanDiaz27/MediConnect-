const { Router } = require("express");
const router = Router();
const {
  getPatient,
  getPatients,
  createPatient,
  getDoctors,
  addDoctor,
  deleteDoctor,
  getAllergies,
  createAllergie,
  createDisease,
  getDiseases,
  createPrescription_drug,
  getPrescription_drugs,
  deleteAllergie,
} = require("../controllers/patients.controllers");

router.route("/").get(getPatients);

router.route("/").post(createPatient);

/*
Para traer todos los Doctores de un Paciente
Para traer todos los Doctores que no estan relacionados a un Paciente
Especificaciones:
  Se envia el id del Paciente por params 
    ej: localhost:3001/patient/doctors/id_paciente
    res: { 
      data: doctores_relacionados, 
      unlinked: doctores_no_relacionados,
    }
  Se puede filtrar por Nombre de Doctor mediante querys
    ej: localhost:3001/patient/doctors/id_paciente?doctor=Victor
    res: { 
      data: doctores_relacionados, 
      unlinked: doctores_no_relacionados,
    }
*/
router.route("/doctors/:id").get(getDoctors);

/*
Para agregar un Doctor a lista de Doctores de un Paciente
Se envia por params el id del Paciente
Y se envia por body el id del Doctor body -> id_Doctor
ej: localhost:3001/patient/doctors/id_paciente
*/
router.route("/doctors/:id").post(addDoctor);
/*
Para eliminar un Doctor a lista de Doctores de un Paciente
Se envia por params el id del Paciente
Y se envia por query el id del Doctor
ej: localhost:3001/patient/doctors/:id_paciente?id_Doctor=Mauricio
*/
router.route("/doctors/:id").delete(deleteDoctor);

router.route("/:id").get(getPatient);

//Ruta para traer las alergias vinculadas con un paciente
//y sus detalles, recibe el id del paciente por params
router.route("/allergy/:id").get(getAllergies);

//Ruta para crear una alergia vinculada a un paciente
//recibe el id del paciente a vincular por params
//recibe los datos de la alergia por body
router.route("/allergy/:id").post(createAllergie);

//Ruta para traer las enfermedades vinculadas a un paciente
//y sus detalles, recibe el id del paciente por params
router.route("/disease/:id").get(getDiseases);

//Ruta para crear una enfermedad vinculada a un paciente
//recibe el id del paciente a vincular por params
//recibe los datos de la enfermedad por body
router.route("/disease/:id").post(createDisease);

//Ruta para traer los medicamentos vinculados a un paciente
//y sus detalles, recibe el id del paciente por params
router.route("/prescription_drug/:id").get(getPrescription_drugs);

//Ruta para crear un medicamento vinculado a un paciente
//recibe el id del paciente a vincular por params
//recibe los datos del medicamento por body
router.route("/prescription_drug/:id").post(createPrescription_drug);

//Ruta para borrar una alergia vinculada a un paciente
//recibe el id del paciente por params
//recibe el id de la alergia por query
router.route("/allergy/:idPatient").delete(deleteAllergie);

module.exports = router;
