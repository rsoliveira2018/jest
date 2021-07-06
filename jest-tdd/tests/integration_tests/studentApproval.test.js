import { defineFeature, loadFeature } from 'jest-cucumber';
import { avg } from '../../src/student';

const feature = loadFeature('./students.feature')

defineFeature(feature, test => {

    let isApproved = false;
    let finalGrade = 0;
    const grades = [];

    beforeEach(()=>{
        //finalGrande = avg(grades);
    });

    test('Calculating final grade', ({ given, when, then }) => {

        given('I have an array of grades', () => {
            grades = [3, 6, 2, 4, 10];
        });

        when('I have an average greater or equal to 5', () =>{
            if(avg(grades) >= 5) isApproved = true;
        });
        
        then('I should be declared approved', () =>{
            expect(isApproved).toBe(true);
        });
    });
});