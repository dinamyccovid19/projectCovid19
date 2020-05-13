import * as firebase from 'firebase';
const { GeoPoint, Timestamp } = firebase.firestore;

export default {
  "emailDomainRules": [
    {
      "domain": "unipa.it",
      "organizationId": "one"
    }
  ],
  "organizations": [
    {
      "name": "Universita' di Palermo",
      "description": "aaaaa",
      "logo": "aaaa",
      "administratorIds": ["aaa", "bbb"],
      "organizationType": "university",
      "formOptions": {
        "departments": ["Anatomical Biology", "Department of informatics"],
        "roles": ["student", "professor"],
        "majors": ["Biology", "Chemistry"]
      }
    }
  ],
  "rooms": [
    {
      "label": "Laboratorio 1",
      "description": "aaaa",
      "coordinate": new GeoPoint(12.00231, 18.23),
      "address": "Via ...",
      "pictures": [
        {
          "url": "aaaa"
        },
        {
          "url": "bbbb"
        }
      ],
      "supervisorIds": ["aaa", "bbb"],
      "organizationId": "5ENRfLxkpsaCZscmr3ZK",
      "maxNumRealtime": 2,
      "maxNumSchedule": 8,
      "preCheckInTime": 60 * 10,
      "currentNumRealTime": 2,
      "currentNumSchedules": 5,
    }
  ],
  "countries": [
    {
      "label": "Italy",
      "regions": [
        {
          "label": "Sicilia",
          "provinces": [
            {
              "label": "Palermo",
              "coordinate": new GeoPoint(12.00231, 18.23)
            }
          ]
        }
      ]
    }, {
      "label": "France",
      "regions": [{
        "label": "Paris",
        "provinces": [{
          "label": "Paris City Center",
          "coordinate": new GeoPoint(14.00231, 18.23)
        }]
      }]
    }
  ]
}
