import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule para simular rutas
import { LocalesFormComponent } from './locales-form.component';

describe('LocalesFormComponent', () => {
  let component: LocalesFormComponent;
  let fixture: ComponentFixture<LocalesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalesFormComponent, RouterTestingModule], // Agrega RouterTestingModule
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: {} } }, // Mock de ActivatedRoute
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
