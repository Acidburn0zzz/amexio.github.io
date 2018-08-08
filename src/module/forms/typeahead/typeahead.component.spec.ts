/**
 * Created by pratik on 1/12/17.
 */
import { AmexioTypeAheadComponent } from './typeahead.component';
import { AmexioFormIconComponent } from '../icon/icon.component';
import { FormsModule } from '@angular/forms';
import { IconLoaderService, CommonDataService } from '../../../index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('TypeAhead', () => {

  let comp: AmexioTypeAheadComponent;
  let fixture: ComponentFixture<AmexioTypeAheadComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AmexioTypeAheadComponent, AmexioFormIconComponent],
      providers: [IconLoaderService, CommonDataService, HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(AmexioTypeAheadComponent);
    comp = fixture.componentInstance;

    it('true is true', () => expect(true).toBe(true));
  });


  // it('initialize innervalue', () => {
  //   comp.value='sagfaf'; 
  //        expect(comp['innerValue']).toEqual(comp.value);
  //     }); 


  // it('get innervalue', () => {
  //   comp.value='sagfaf';

  // //this.fixture.detectChanges();
  //        expect(comp.value()).toEqual(comp['innerValue']);
  //     }); 

  //wrking 1- set errormsg
  it('set errormsg', () => {
    comp.errormsg = 'data incorect';
    expect(comp.helpInfoMsg).toEqual('data incorect<br/>');
  });

  it('get errormsg', () => {
    expect(comp.errormsg).toEqual(comp._errormsg);
  });
  it('check for isValid', () => {
    comp.isValid = true;
    expect(comp.isValid).toEqual(true);
  });
  it('check onblur()', () => {
    comp.onBlur.subscribe((g: any) => {
      expect(comp.value).toEqual(g);
    });

    it('register on change', () => {
      let fn: any;
      comp.registerOnChange(fn);
      expect(comp['onChangeCallback']).toEqual(fn);
    });

    // it('check onFocus ', () => {
    //   comp.showToolTip = true;
    //   comp.posixUp = comp.focus;
    //   comp.focus.subscribe((g: any) => {
    //     expect(comp.value).toEqual(g);
    //   });
    //   it('variable posixUp', () => {
    //     comp.posixUp = false;
    //   })

  it('register on touched', () => {
    let fn: any;
    comp.registerOnTouched(fn);
    expect(comp['onTouchedCallback']).toEqual(fn);
  });


  //on focus()
  it('on focus()', () => {
    //comp.showToolTip=true;
    let flag = true;
    comp.focus;
    expect(comp.showToolTip).toEqual(flag);
  });
  it('check for showtooltip', () => {
    // comp.showToolTip;
    expect(comp.showToolTip).toBe(false);
  });

  // on blur()
  it('on blur()', () => {
    comp.onBlur(fixture);
    comp['onTouchedCallback()'];
    expect(comp.showToolTip).toEqual(false);

  });
  it('get helpinfomsg', () => {
    comp.helpInfoMsg = "test";
    expect(comp.helpInfoMsg).toEqual(comp.helpInfoMsg);
  });
  });
  // it('writevalue', () => {
  //   comp.writeValue(fixture);

  //   expect(comp.value).not.toEqual(comp['innerValue']);

  // })

  // it('getCssClass()', () => {
  //   comp.getCssClass();
  //   expect(comp.getCssClass).toBeUndefined;
  //   });

  //working 3 get maxerrormsg
  // it('get _maxerrormsg', () => {
  //   comp.maxerrormsg = 'trial';
  //   expect(comp.maxerrormsg).toEqual(comp._maxerrormsg);
  // })
// it('set validation flag', () => {
  //   //comp.helpInfoMsg="test";
  //   let flag: boolean;
  //   comp.setValidationFlag(flag);
  //   expect(comp.isValid).toEqual(flag);
  // })



  //set maxerrormsg


  //set minerrormsg
  // it('set minerrormsg', () => {
  //   let testvalue = comp._minerrormsg;
  //   comp.minerrormsg = testvalue;
  //   comp.helpInfoMsg="testMin value: <br/>";
  //   let str = comp.helpInfoMsg + 'Min value: ' + comp.value+ '<br/>';
  //   expect(comp.helpInfoMsg).toBe(str);
  // });

});
