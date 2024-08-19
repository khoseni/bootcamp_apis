// enoughAirtime.test.js

import assert from "assert";
import { enoughAirtime } from "../enoughAirtime.js"; 


describe('The enoughAirtime Function', function () {

    it('should return R0.37 for the usage "call,sms,data" with 15 airtime available', function () {
        assert.equal('0.37', enoughAirtime('call,sms,data', 15));
    });

    it('should return R1.24 for the usage "call,call" with 5 airtime available', function () {
        assert.equal('1.24', enoughAirtime('call,call', 5));
    });

    it('should return R0.00 when there is no usage and airtime is 0', function () {
        assert.equal('0.00', enoughAirtime('', 0));
    });

    

}); 
