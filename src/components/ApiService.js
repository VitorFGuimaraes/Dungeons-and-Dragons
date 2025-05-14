export class ApiService {
    static async buscarClasses() {
      const response = await fetch('https://www.dnd5eapi.co/api/classes');
      const data = await response.json();
      return data.results;
    }
  
    static async buscarDetalhesClasse(index) {
      const response = await fetch(`https://www.dnd5eapi.co/api/classes/${index}`);
      return await response.json();
    }
  }
  