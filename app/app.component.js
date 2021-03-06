"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var team_services_1 = require("./shared/team.services");
var research_service_1 = require("./shared/research.service");
var AppComponent = (function () {
    function AppComponent(router, researchService, teamService) {
        this.router = router;
        this.researchService = researchService;
        this.teamService = teamService;
    }
    AppComponent.prototype.getResearchItems = function () {
        var _this = this;
        this.researchService.getResearchItems().then(function (researchItems) { return _this.researchItems = researchItems; });
    };
    AppComponent.prototype.getTeamItems = function () {
        var _this = this;
        this.teamService.getTeamItems().then(function (teamItems) { return _this.teamItems = teamItems; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getResearchItems();
        this.getTeamItems();
    };
    AppComponent.prototype.onSelectResearch = function (research) {
        this.selectedResearch = research;
        this.router.navigate(['/detail', this.selectedResearch.id]);
    };
    AppComponent.prototype.onSelectTeam = function (team) {
        this.selectedTeam = team;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        research_service_1.ResearchService,
        team_services_1.TeamService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map