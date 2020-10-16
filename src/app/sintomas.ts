export class Sintomas {
    idConsulta:number;
    dateConsulta:string;
    breathingProblem:string;
    fever:string;
    dryCough:string;
    soreThroat:string;
    runningSe:string;
    asthma:string;
    chronicLungDisease:string;
    headache:string;
    heartDisease:string;
    diabetes:string;
    hyperTension:string;
    fatigue:string;
    gastrointestinal:string;
    abroadTravel:string;
    contactWithCovidPatient:string;
    attendedLargeGathering:string;
    visitedPublicExposedPlaces:string;
    familyWorkingInPublicExposedPlaces:string;
    wearingMasks:string;
    sanitizationFromMarket:string;
    covid:string;
    constructor(idConsulta:number, dateConsulta:string, breathingProblem:string, fever:string, dryCough:string, 
        soreThroat:string, runningSe:string, asthma:string, chronicLungDisease:string, headache:string, heartDisease:string, 
        diabetes:string, hyperTension:string, fatigue:string, gastrointestinal:string, abroadTravel:string, 
        contactWithCovidPatient:string, attendedLargeGathering:string, visitedPublicExposedPlaces:string, 
        familyWorkingInPublicExposedPlaces:string, wearingMasks:string, sanitizationFromMarket:string, covid:string){
            this.idConsulta = idConsulta;
            this.dateConsulta = dateConsulta;
            this.breathingProblem = breathingProblem;
            this.fever = fever;
            this.dryCough = dryCough;
            this.soreThroat = soreThroat;
            this.runningSe = runningSe;
            this.asthma = asthma;
            this.chronicLungDisease = chronicLungDisease;
            this.headache = headache;
            this.heartDisease = heartDisease;
            this.diabetes = diabetes;
            this.hyperTension = hyperTension;
            this.fatigue = fatigue;
            this.gastrointestinal = gastrointestinal;
            this.abroadTravel = abroadTravel;
            this.contactWithCovidPatient = contactWithCovidPatient;
            this.attendedLargeGathering = attendedLargeGathering;
            this.visitedPublicExposedPlaces = visitedPublicExposedPlaces;
            this.familyWorkingInPublicExposedPlaces = familyWorkingInPublicExposedPlaces;
            this.wearingMasks = wearingMasks;
            this.sanitizationFromMarket = sanitizationFromMarket;
            this.covid = covid;
        }
}
