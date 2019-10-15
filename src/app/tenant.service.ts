import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Using Observable
import { Observable, BehaviorSubject, from } from 'rxjs';

export interface Tenant {
    salutions: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    phone: number;
    familyMembers: number;
    address: string;
    streetAddress: string;
    streetAddressLine2: string;
    city: string;
    state: string;
    postal: number;
    country: string;

}

@Injectable({
    providedIn: 'root'
  })
  export class TenantService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Using Observable - Behavior Subject.
  private _tenantList = new BehaviorSubject<Tenant[]>([]);

  // Defining a readonly observable from the behaviorSubject.
    readonly tenantList = this._tenantList.asObservable();

    // Node JS server.
    private tenantUrl = 'http://localhost:3000/tenant';

    // DataStore that contains tenantList object.
    // Camera man with his camera.
    private dataStore: { tenantList: Tenant[] } = { tenantList: [] };
  
    constructor(private http: HttpClient) {
      // Http get
      this.getTenantList();
    }
    

    /**
     * Get tenant list from node express service through http client service call.
     */
    getTenantList() {
            // Get the data from http client service call. - Marriage medai.
            this.http.get<Tenant[]>(`${this.tenantUrl}`).subscribe(data => {
                console.log('getTenantList :' + data);

                // data - is the video being recorded.
                // Video camera man recording the video.
                this.dataStore.tenantList = data;

                // Assigning the values from datastore to the observable.
                // Video gets transmitted to the TV in the hall outside.
                this._tenantList.next( Object.assign({}, this.dataStore).tenantList);
            }, error => console.log('Could not load Tenant.'));
      }

      // Return TenantList observable to the Angular Component.
      getTenantListObservable() {
          return this._tenantList.asObservable;
      }
  }
