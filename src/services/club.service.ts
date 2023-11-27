import airtableBase from './airtable.service'
import type ClubItem from '@/models/ClubItem'

const TABLE_NAME = 'Club'
const ACTIVE_VIEW = 'public'

const clubService = {

    getList () {
      return new Promise((resolve, reject) => {
          const resultList: ClubItem[] = []
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
                    oeffnungszeite: partialRecord.get('Öffnungszieten') as string,
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
    getById (clubId: string) {
      airtableBase(TABLE_NAME).find(clubId, function(err, record) {
        if (err) { console.error(err); return; }
        console.log('club', record?.fields)
        return record?.fields;
      });
    }
  }
  
  export default clubService