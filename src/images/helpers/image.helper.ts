import * as moment from 'moment';

export const renameImage = (req, file, callback) => {


    let formatDate = (moment()).format('DD-MMM-YYYY-HH:mm');

    const extension = file.originalname.split('.')[1];
    const fileName = file.originalname;
    const randomName = Array(4).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');


    callback(null, `${randomName}-${formatDate}.${extension}`);


}


export const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Formato Invalido'), false)
    }
    callback(null, true);
}
