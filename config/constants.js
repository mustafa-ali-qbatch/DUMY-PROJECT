const MODEL_OPTS = { underscored: true, updatedAt: 'updated_at', createdAt: 'created_at' }
const formatData = (dataArray) => {
    return dataArray.map((data) => {
      const formattedData = {};
  
      Object.entries(data).forEach(([key, value]) => {
        const keys = key.split('.');
        let currentObj = formattedData;
  
        keys.forEach((nestedKey, index) => {
          if (index === keys.length - 1) {
            currentObj[nestedKey] = value;
          } else {
            currentObj[nestedKey] = currentObj[nestedKey] || {};
            currentObj = currentObj[nestedKey];
          }
        });
      });
  
      return formattedData;
    });
  }
export {
    MODEL_OPTS,
    formatData
}