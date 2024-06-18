import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanelComponent } from './menu-panel.component';

describe('MenuPanelComponent', () => {
  let component: MenuPanelComponent;
  let fixture: ComponentFixture<MenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleMenu', () => {
    const spy = spyOn(component.actionToggleMenu, 'emit').and.callThrough();
    component.toggleMenu();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
