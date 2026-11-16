import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListConf } from './list-conf';

describe('ListConf', () => {
  let fixture: ComponentFixture<ListConf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ListConf] }).compileComponents();
    fixture = TestBed.createComponent(ListConf);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render one card per conference', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.conf-card');
    expect(cards.length).toBe(fixture.componentInstance.conferences.length);
  });
});
