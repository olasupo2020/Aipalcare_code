import { NewPatientModel } from "../models/NewPatientModel";
import apis from '../contents/api.json';

import axios from "axios";
export class NewPatientService {


    constructor() {

    }

    async save(request: NewPatientModel): Promise<boolean> {



        const response =
            await axios
                .post(
                    apis.saveOrg, request
                );

        const { body } = await response.data;
        console.log(body);



        return true;

    }
}