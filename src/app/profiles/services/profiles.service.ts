import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseService } from "../../shared/services/base.service";
import { ProfilesEntity } from "../model/profiles.entity";

@Injectable({
  providedIn: 'root'
})

export class ProfilesService extends BaseService<ProfilesEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://hormonal-care-backend.up.railway.app';
    this.resourceEndpoint = '/api/v1/profile/profile';
  }

  getProfileDetails(id: string): Observable<ProfilesEntity> {
    return this.http.get<ProfilesEntity>(`${this.basePath}${this.resourceEndpoint}/${id}`);
  }
}
