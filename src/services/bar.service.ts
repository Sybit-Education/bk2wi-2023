import airtableBase from './airtable.service'
import type BarItem from '@/models/BarItem'

const TABLE_NAME = 'Bar'
const ACTIVE_VIEW = 'public'

const barService = {


    getList () {
      return new Promise((resolve, reject) => {
          const resultList: BarItem[] = []
          airtableBase(TABLE_NAME)
          .select({
              view: ACTIVE_VIEW
          })
          .eachPage(
              function page (partialRecords, fetchNextPage) {
              // This function (`page`) will get called for each page of records.
              partialRecords.forEach((partialRecord) => {
                  return resultList.push({
                  id: partialRecord.id,
                  name: partialRecord.get('Name') as string,
                  bild: partialRecord.get('Bild') as any,
                  getraenkekarte: partialRecord.get('Geträenkekarte') as string,
                  adresse: partialRecord.get('Adresse') as string,
                  ort: partialRecord.get('Ort') as string,
                  plz: partialRecord.get('PLZ') as string,
                  email: partialRecord.get('E-Mail') as string,
                  telefon: partialRecord.get('Telefon') as string,
                  oeffnungstage: partialRecord.get('Öffnungstage') as string,
                  oeffnungszeiten: partialRecord.get('Öffnungszeiten') as string,
                  webseite: partialRecord.get('Webseite') as string,
                })
              })

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
    getById (barId: string) {
      airtableBase(TABLE_NAME).find(barId, function(err, record) {
        if (err) { console.error(err); return; }
        console.log('Bar', record?.fields)
        return record?.fields;
      });
    }
  }
  
  export default barService