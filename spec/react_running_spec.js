const request = require("request");
const base_url = "http://localhost:3000/";

describe("React running and http://localhost:3000/ is showing website", function() {
    it("returns status code 200", function(done) {
        request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("returns body container 'To get started, edit '", function() {
        request.get(base_url, function(error, response, body) {
            expect(body).toContain("To get started, edit ");
            done();
        });
    });
});