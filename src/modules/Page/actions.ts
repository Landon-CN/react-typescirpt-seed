import { createAction } from 'redux-actions';
import * as Constants from './Constants';

export interface addType {
    count: number
}
const add = createAction<addType, number>(Constants.ADD, (num: number) => {
    let ret = {
        count: num
    }
    return ret;
});

export default {
    add
}