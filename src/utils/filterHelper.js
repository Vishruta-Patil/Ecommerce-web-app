export const composeFunc = ( state, ...func) => (data)=> {
    return func.reduce((acc, curr) =>  curr(state, acc), data);
  };

export const filterByPrice = (state, data) => {
    if(state.filterByPrice === "1500-4000") {
        return data.filter(product => product?.price >= 1500 && product?.price <= 4000)
    } else if(state.filterByPrice === "4001-7000") {
        return data.filter(product => product?.price >= 4001 && product?.price <= 7000)
    } else if(state.filterByPrice === "7001+") {
        return data.filter(product => product?.price >= 7001)
    } else {
        return data
    }
}

export const filterByTemplate = (state, data) => {
    if(state.template === "2") {
        return data.filter(product => product?.template === 2)
    } else if(state.template === "3") {
        return data.filter(product => product?.template === 3)
    } else if(state.template === "3+") {
        return data.filter(product => product?.template > 3)
    } else {
        return data
    }
}

export const filterByType = (state, data) => {
    if(state.type === "loafers") {
        return data.filter(product => product?.type === "loafers")
    } else if(state.type === "sneakers") {
        return data.filter(product => product?.type === "sneakers")
    } else {
        return data
    }
}
