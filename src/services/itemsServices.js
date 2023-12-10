const items = require('../models/itemsModels');

const getItems = async (params) => {    //FALTA ver params
 return await items.getItems(params);
};

const getItemsBuscados = async (params) => {    //FALTA ver params
 return await items.getItemsBuscados(params);
};


module.exports = {
 getItems,
 getItemsBuscados
}
