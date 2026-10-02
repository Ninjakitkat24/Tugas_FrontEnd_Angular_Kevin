import { Component, OnInit, inject, signal } from '@angular/core';
import { Todo, TodoApi } from './todo-api';

@Component({
  selector: 'app-route2',
  template: `
    <article class="route-card route-card--purple">
      <span class="route-number">02</span>
      <div>
        <p class="route-label">Component Route2</p>
        <h2>Route kedua</h2>
        <p>
          Angular mengganti isi <code>&lt;router-outlet&gt;</code> dengan
          component ini saat URL berada di <code>/route2</code>.
        </p>
      </div>
    </article>

    <section class="todos" aria-labelledby="todos-title">
      <h2 id="todos-title">Daftar Todo</h2>
      @if (loading()) {
        <p role="status">Memuat todo...</p>
      } @else if (error()) {
        <p role="alert">{{ error() }}</p>
      } @else {
        <div class="table-wrap">
          <table>
            <caption>Data todo dari JSONPlaceholder</caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Judul</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              @for (todo of todos(); track todo.id) {
                <tr>
                  <td>{{ todo.id }}</td>
                  <td>{{ todo.title }}</td>
                  <td>
                    <span class="todo-status" [class.completed]="todo.completed">
                      {{ todo.completed ? 'Selesai' : 'Belum selesai' }}
                    </span>
                  </td>
                </tr>
              } @empty {
                <tr><td colspan="3">Belum ada todo.</td></tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>
  `,
  styles: `
    :host { display: block; }
    .route-card {
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
      padding: 2rem;
      border-radius: 1rem;
      color: #32194f;
      background: linear-gradient(135deg, #f0e4ff, #fbf7ff);
      border: 1px solid #c7a4ef;
    }
    .route-number { font-size: 2rem; font-weight: 800; color: #793db4; }
    .route-label { margin: 0 0 .35rem; color: #793db4; font-weight: 700; }
    h2 { margin: 0 0 .75rem; }
    p { line-height: 1.6; }
    code { padding: .15rem .4rem; border-radius: .35rem; background: #fff; }
    .todos { margin-top: 1.5rem; }
    .todos h2 { font-size: 1.25rem; }
    .table-wrap { overflow-x: auto; }
    table {
      width: 100%;
      min-width: 32rem;
      border-collapse: collapse;
      background: #fff;
    }
    caption { padding: 0 0 .5rem; text-align: left; color: #5d5366; }
    th, td { padding: .7rem .85rem; border-bottom: 1px solid #ded7e6; text-align: left; }
    th { background: #f3edf8; color: #32194f; }
    td:first-child { width: 4rem; }
    .todo-status { flex: 0 0 auto; color: #8a4b00; }
    .todo-status.completed { color: #176b42; }
  `
})
export class Route2 implements OnInit {
  private readonly todoApi = inject(TodoApi);

  readonly todos = signal<Todo[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');

  ngOnInit(): void {
    this.todoApi.getTodos().subscribe({
      next: (todos) => {
        this.todos.set(todos);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Todo gagal dimuat. Periksa koneksi internet lalu coba lagi.');
        this.loading.set(false);
      }
    });
  }
}
