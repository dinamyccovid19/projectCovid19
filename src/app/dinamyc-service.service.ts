import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import data from '../assets/data';


type Country = {
  id?: string;
  label: string;
  regions: {
    label: string;
    provinces: {
      label: string;
      coordinate: firebase.firestore.GeoPoint
    }[]
  }[]
}

type Picture = {
  url: string;
}

type EmailDomainRule = {
  id?: string;
  domain: string;
  organizationId: string;
}

type Room = {
  id?: string;
  label: string;
  description: string;
  coordinate: firebase.firestore.GeoPoint;
  pictures: Picture[],
  supervisorIds: string[],
  organizationId: string,

  maxNumRealtime: number;
  maxNumSchedule: number;
  currentNumRealTime: number;
  currentNumSchedules: number;
}

type Organization = {
  id?: string;
  name: string;
  description: string;
  logo: string;
  administratorIds: string[];
  organizationType: string; // "university" | "company";
  formOptions: any;
}

type User = {
  organizationId: string,
  roles: string,
  firstName: string,
  lastName: string,
  gender: string,
  completedOnboarding: false,
  department: string
}


@Injectable({
  providedIn: 'root'
})
export class DinamycServiceService {

  

  constructor(public loadingController: LoadingController, public toastController: ToastController ) { }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingToCreate() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color:"success",
      message: 'Gentle user operation is confirmed',
      duration: 1000
    });
    toast.present();
  }


    /**
     * Fetch list of available countries
     */
    fetchCountires = async (): Promise<Country[]> => {
      return data.countries
    }


    /**
     * Fetch a email domain rule
     * This function can be used to check if the user's email address belongs to an organization
     * @param domain 
     */
    fetchEmailDomainRulesByDomain = async (domain: string): Promise<EmailDomainRule | undefined> => {
      return data.emailDomainRules[0];
    }


    /**
     * 
     * Fetch list of organizations
     */
    fetchOrganizationById = async (id: string): Promise<Organization> => {
      return data.organizations[0]
    }


    /**
     * Fetch a list of rooms based on a geolocation
     */
    fetchRoomByLocation = async (): Promise<Room[]> => {
      return data.rooms;
    }


    /**
     * Fetch a list of authorized rooms
     */
    fetchAuthorizedRoomByUser = async (userId: string): Promise<Room[]> => {
      return data.rooms;
    }


}
