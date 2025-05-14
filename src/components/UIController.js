import { ClasseDnd } from './ClasseDnd.js';
import { ApiService } from './ApiService.js';

export class UIController {
  static async mostrarClasses() {
    const container = document.getElementById('lista-classes');
    container.innerHTML = 'Carregando...';

    const classes = await ApiService.buscarClasses();
    container.innerHTML = '';

    for (const classe of classes) {
      const detalhes = await ApiService.buscarDetalhesClasse(classe.index);
      const novaClasse = new ClasseDnd(detalhes.name, detalhes.hit_die);

      const div = document.createElement('div');
      div.classList.add('classe-item');
      div.innerText = novaClasse.resumo();

      container.appendChild(div);
    }
  }
}
