import airtableBase from './airtable.service'
import type VerleihItem from '@/models/VerleihItem'

const TABLE_NAME = 'Verleih'
const ACTIVE_VIEW = 'public'

const verleihService = {

    getList () {
      return new Promise((resolve, reject) => {
          const resultList: VerleihItem[] = []

          airtableBase(TABLE_NAME)
          .select({
              view: ACTIVE_VIEW
          })
          .eachPage(
              function page (partialRecords, fetchNextPage) {
              // This function (`page`) will get called for each page of records.
              partialRecords.forEach((partialRecord) => {
                  resultList.push({
                    id: partialRecord.id,
                    name: partialRecord.get('Name') as string,
                    bild: partialRecord.get('Bild') as string,
                    notes: partialRecord.get('Notes') as string,
                    adresse: partialRecord.get('Adresse') as string,
                    ort: partialRecord.get('Ort') as string,
                    plz: partialRecord.get('PLZ') as string,
                    email: partialRecord.get('E-Mail') as string,
                    telefon: partialRecord.get('Telefon') as string,
                    oeffnungstage: partialRecord.get('Öffnungstage') as string,
                    oeffnungszeiten: partialRecord.get('Öffnungszieten') as string,
                    webseite: partialRecord.get('Webseite') as string,                                                   
                  })
              })
              // To fetch the next page of records, call `fetchNextPage`.
              // If there are more records, `page` will get called again.
              // If there are no more records, `done` will get called.
              fetchNextPage()
              },
              function done (err) {
                console.log(resultList)
                  if (err) {
                      reject(err);
                  }
                  resolve(resultList)
              }
          )
      })
    },
    getById (verleihId: string) {
      airtableBase(TABLE_NAME).find(verleihId, function(err, record) {
        if (err) { console.error(err); return; }
        console.log('verleih', record?.fields)
        return record?.fields;
      });
    }
  }
  
  export default verleihService