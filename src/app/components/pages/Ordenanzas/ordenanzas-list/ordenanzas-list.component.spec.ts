import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenanzasListComponent } from './ordenanzas-list.component';

describe('OrdenanzasListComponent', () => {
  let component: OrdenanzasListComponent;
  let fixture: ComponentFixture<OrdenanzasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenanzasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenanzasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
