import stocks from '../../data/stock'

export default {
    state: {
        stocks:[]
    },
    mutations: {
        setStocks(state, stocks){
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order){
            console.log(order)
            commit()
        },
        initStocks({commit}){
            commit('setStocks',stocks)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}