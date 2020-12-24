import { OrganizationModel } from "../models/OrganizationModel";
import apis from '../contents/api.json';

import axios from "axios";
export class OrganizationService {


    constructor() {

    }

    async save(request: OrganizationModel): Promise<boolean> {

        

        const response =
            await axios
                .post(
                    apis.saveOrg, request
                );

        const { body } = await response.data;
        console.log(body)



        return true;

    }
}