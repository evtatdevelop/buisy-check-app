export default class Service {

  getResource = async (url) => {
    const res = await fetch(url, {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json;charset=utf-8',
      //   'API-Key': 'fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY'
      // }
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json();   
  }


  getevent = () => this.getResource(`https://request.sibgenco.local/services/?data=lastactivity&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`);

  // postResource = async (url, data) => {
  //   const res = await fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       'API-Key': 'fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY'
  //     }
  //   });
  //   if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
  //   return await res.json(); 
  // }

  // updateResource = async (url, data) => {
  //   const res = await fetch(url, {
  //     method: 'PATCH',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       'API-Key': 'fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY'
  //     }
  //   });
  //   if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
  //   return await res.json(); 
  // }

  // deleteResource = async (url) => {
  //   const res = await fetch(url, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       'API-Key': 'fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY'
  //     }
  //   });
  //   if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
  //   return await res.json(); 
  // }
}
