export default class Api {
  getImages() {
    return new Promise(function (resolve) {
      resolve([{
        id: 1,
        date:     "October 07, 2016",
        url:     'http://placehold.it/250x150'
      }, {
        id: 2,
        date:     "October 07, 2016",
        url:     'http://placehold.it/250x150'
      }, {
        id: 3,
        date:     "October 07, 2016",
        url:     'http://placehold.it/250x150'
      },{
        id: 4,
        date:     "October 07, 2016",
        url:     'http://placehold.it/250x150'
      }])
    })
  }
}
