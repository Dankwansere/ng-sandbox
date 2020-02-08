import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    jasmine.addMatchers({
      isGreaterThanFive: function(util, customEqualityTesters) {
        return {
          compare: function (actual, expected) {
            const result = {pass: false, message: ''};
            if (actual > 5) {
              result.pass = true;
            } else {
              result.pass = false;
            }

            if (result.pass) {
              result.message = "pass"
            } else {
              result.message = "fail"
            }
            return result;
          }
        };
      }
    });
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    const num = 5;
    expect('num').isGreaterThanFive();
  });


  it(`should have as title 'test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('test-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-app!');
  });
});
