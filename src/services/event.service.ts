import airtableBase from './airtable.service'
import type EventItem from '@/models/EventItem'

const TABLE_NAME = 'Event'
const ACTIVE_VIEW = 'public'

const eventService = {

  getList () {
    return new Promise((resolve, reject) => {
        const resultList: EventItem[] = []
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
                name: partialRecord.get('Name') as string
                })
            })
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage()
            },
            function done (err) {
                if (err) {
                    reject(err);
                }
                resolve(resultList)
            }
        )
    })
  },
  getById (eventId: string) {
    airtableBase(TABLE_NAME).find(eventId, function(err, record) {
      if (err) { console.error(err); return; }
      console.log('event', record?.fields)
      return record?.fields;
    });
  }
}

export default eventService