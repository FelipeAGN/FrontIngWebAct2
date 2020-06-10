import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaArticuloComponent } from './categoria-articulo.component';

describe('CategoriaArticuloComponent', () => {
  let component: CategoriaArticuloComponent;
  let fixture: ComponentFixture<CategoriaArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
