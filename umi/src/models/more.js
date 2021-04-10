import { getChannelData, getChannelDataBySearch } from '../services/more.js';

const model = {
  namespace: 'more',
  state: { data: [] },
  effects: {
    *getMoreData(action, { call, put }) {
      const res = yield call(getChannelData, action.payload);
      // 更新数据
      yield put({ type: 'moreData', payload: res });
    },
    *getMoreDataBySearch(action, { call, put }) {
      const res = yield call(getChannelDataBySearch, action.payload);
      // 更新数据
      yield put({ type: 'moreData', payload: res });
    },
  },
  reducers: {
    moreData(state, action) {
      // console.log('state', state);
      return {
        ...state,
        data: action.payload.data,
      };
    },
  },
};

export default model;
