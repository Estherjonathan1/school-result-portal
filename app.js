const results = [
  { student: 'Ada Bello', admission: 'BFS-101', className: 'JSS1', subjects: 'English, Social Studies, Basic Technology', average: '52%', status: 'Credit' },
  { student: 'Blessing Chinedu', admission: 'BFS-102', className: 'JSS1', subjects: 'Mathematics, French, Home Economics', average: '43%', status: 'Needs Improvement' },
  { student: 'Faith Garba', admission: 'BFS-103', className: 'JSS1', subjects: 'English, Physical Education, Mathematics', average: '51%', status: 'Credit' },
  { student: 'Precious Adekunle', admission: 'BFS-104', className: 'JSS1', subjects: 'Computer Studies, English, Home Economics', average: '50%', status: 'Credit' },
  { student: 'Tobi Nnaji', admission: 'BFS-105', className: 'JSS1', subjects: 'Physical Education, Home Economics, Civic Education', average: '52%', status: 'Credit' },
  { student: 'Zainab Danjuma', admission: 'BFS-106', className: 'JSS1', subjects: 'Social Studies, English, Basic Science', average: '82%', status: 'Very Good' },
  { student: 'Peter Umeh', admission: 'BFS-107', className: 'JSS1', subjects: 'Social Studies, Basic Science, Basic Technology', average: '86%', status: 'Excellent' },
  { student: 'Ahmad Bello', admission: 'BFS-108', className: 'JSS1', subjects: 'Mathematics, Civic Education, Physical Education', average: '60%', status: 'Credit' },
  { student: 'Funke Ojo', admission: 'BFS-109', className: 'JSS1', subjects: 'Social Studies, English, Agricultural Science', average: '72%', status: 'Good' },
  { student: 'Chidi Njoku', admission: 'BFS-110', className: 'JSS1', subjects: 'Civic Education, Mathematics, Home Economics', average: '56%', status: 'Credit' },
  { student: 'Ada Ojo', admission: 'BFS-111', className: 'JSS1', subjects: 'CRS, Computer Studies, Basic Technology', average: '83%', status: 'Very Good' },
  { student: 'Ifeoma Okafor', admission: 'BFS-112', className: 'JSS1', subjects: 'French, Basic Technology, Social Studies', average: '43%', status: 'Needs Improvement' },
  { student: 'Precious Anyanwu', admission: 'BFS-113', className: 'JSS1', subjects: 'Mathematics, Civic Education, Social Studies', average: '67%', status: 'Good' },
  { student: 'Ada Lawal', admission: 'BFS-114', className: 'JSS1', subjects: 'CRS, Basic Science, Physical Education', average: '60%', status: 'Credit' },
  { student: 'Ibrahim Yakubu', admission: 'BFS-115', className: 'JSS1', subjects: 'Social Studies, French, Mathematics', average: '76%', status: 'Very Good' },
  { student: 'Ada Chukwu', admission: 'BFS-116', className: 'JSS1', subjects: 'Home Economics, Basic Technology, Basic Science', average: '67%', status: 'Good' },
  { student: 'Adaeze Okoro', admission: 'BFS-117', className: 'JSS1', subjects: 'French, Home Economics, Basic Technology', average: '81%', status: 'Very Good' },
  { student: 'Chinwe Lawal', admission: 'BFS-118', className: 'JSS1', subjects: 'English, Basic Technology, Physical Education', average: '89%', status: 'Excellent' },
  { student: 'Chinwe Nnamdi', admission: 'BFS-119', className: 'JSS1', subjects: 'Social Studies, Mathematics, Basic Technology', average: '96%', status: 'Excellent' },
  { student: 'Bashir Sadiq', admission: 'BFS-120', className: 'JSS1', subjects: 'Physical Education, CRS, Basic Technology', average: '79%', status: 'Very Good' },
  { student: 'Maryam Nnamdi', admission: 'BFS-121', className: 'JSS1', subjects: 'French, Agricultural Science, Basic Science', average: '54%', status: 'Credit' },
  { student: 'Blessing Abubakar', admission: 'BFS-122', className: 'JSS1', subjects: 'Physical Education, Home Economics, French', average: '54%', status: 'Credit' },
  { student: 'Suleiman Danjuma', admission: 'BFS-123', className: 'JSS1', subjects: 'Civic Education, Computer Studies, Physical Education', average: '61%', status: 'Credit' },
  { student: 'Precious Adeyemi', admission: 'BFS-124', className: 'JSS1', subjects: 'Home Economics, Agricultural Science, Mathematics', average: '86%', status: 'Excellent' },
  { student: 'Tunde Anyanwu', admission: 'BFS-125', className: 'JSS1', subjects: 'Mathematics, Basic Science, French', average: '88%', status: 'Excellent' },
  { student: 'Michael Garba', admission: 'BFS-126', className: 'JSS2', subjects: 'Computer Studies, Mathematics, Civic Education', average: '62%', status: 'Credit' },
  { student: 'Chukwuemeka Ogundele', admission: 'BFS-127', className: 'JSS2', subjects: 'Home Economics, Social Studies, Physical Education', average: '93%', status: 'Excellent' },
  { student: 'Amina Yakubu', admission: 'BFS-128', className: 'JSS2', subjects: 'Physical Education, Mathematics, Home Economics', average: '86%', status: 'Excellent' },
  { student: 'Obinna Aliyu', admission: 'BFS-129', className: 'JSS2', subjects: 'French, CRS, Mathematics', average: '56%', status: 'Credit' },
  { student: 'Peter Chukwu', admission: 'BFS-130', className: 'JSS2', subjects: 'Agricultural Science, English, Social Studies', average: '70%', status: 'Good' },
  { student: 'Patience Chukwu', admission: 'BFS-131', className: 'JSS2', subjects: 'Home Economics, Mathematics, Social Studies', average: '91%', status: 'Excellent' },
  { student: 'Ada Adekunle', admission: 'BFS-132', className: 'JSS2', subjects: 'Computer Studies, Basic Technology, Basic Science', average: '61%', status: 'Credit' },
  { student: 'Sani Aliyu', admission: 'BFS-133', className: 'JSS2', subjects: 'Home Economics, English, Computer Studies', average: '58%', status: 'Credit' },
  { student: 'Maryam Yusuf', admission: 'BFS-134', className: 'JSS2', subjects: 'Mathematics, CRS, Social Studies', average: '53%', status: 'Credit' },
  { student: 'Tunde Abubakar', admission: 'BFS-135', className: 'JSS2', subjects: 'Computer Studies, Mathematics, French', average: '84%', status: 'Very Good' },
  { student: 'Maryam Lawal', admission: 'BFS-136', className: 'JSS2', subjects: 'Mathematics, Home Economics, Basic Science', average: '46%', status: 'Needs Improvement' },
  { student: 'Rukayat Mustapha', admission: 'BFS-137', className: 'JSS2', subjects: 'Home Economics, Basic Science, Social Studies', average: '71%', status: 'Good' },
  { student: 'Chukwuemeka Garba', admission: 'BFS-138', className: 'JSS2', subjects: 'Basic Technology, Home Economics, Physical Education', average: '83%', status: 'Very Good' },
  { student: 'Victor Nnamdi', admission: 'BFS-139', className: 'JSS2', subjects: 'French, Physical Education, CRS', average: '66%', status: 'Good' },
  { student: 'Comfort Ogundele', admission: 'BFS-140', className: 'JSS2', subjects: 'Mathematics, Basic Technology, French', average: '42%', status: 'Needs Improvement' },
  { student: 'Ahmad Yusuf', admission: 'BFS-141', className: 'JSS2', subjects: 'Computer Studies, Home Economics, Basic Technology', average: '75%', status: 'Very Good' },
  { student: 'Precious Yusuf', admission: 'BFS-142', className: 'JSS2', subjects: 'Mathematics, French, English', average: '52%', status: 'Credit' },
  { student: 'Ifeoma Sadiq', admission: 'BFS-143', className: 'JSS2', subjects: 'English, CRS, Mathematics', average: '70%', status: 'Good' },
  { student: 'Kelechi Okoro', admission: 'BFS-144', className: 'JSS2', subjects: 'French, Agricultural Science, Basic Technology', average: '72%', status: 'Good' },
  { student: 'Bashir Danjuma', admission: 'BFS-145', className: 'JSS2', subjects: 'Agricultural Science, Basic Technology, Physical Education', average: '89%', status: 'Excellent' },
  { student: 'Rita Eze', admission: 'BFS-146', className: 'JSS2', subjects: 'Mathematics, Physical Education, Civic Education', average: '60%', status: 'Credit' },
  { student: 'Peter Garba', admission: 'BFS-147', className: 'JSS2', subjects: 'Agricultural Science, English, Mathematics', average: '41%', status: 'Needs Improvement' },
  { student: 'Musa Chinedu', admission: 'BFS-148', className: 'JSS2', subjects: 'CRS, Mathematics, Basic Technology', average: '50%', status: 'Credit' },
  { student: 'Fatima Ibe', admission: 'BFS-149', className: 'JSS2', subjects: 'Agricultural Science, Basic Science, Civic Education', average: '49%', status: 'Needs Improvement' },
  { student: 'Obinna Ogundele', admission: 'BFS-150', className: 'JSS2', subjects: 'Basic Technology, Mathematics, Agricultural Science', average: '89%', status: 'Excellent' },
  { student: 'Ejiro Bello', admission: 'BFS-151', className: 'JSS3', subjects: 'English, French, Home Economics', average: '91%', status: 'Excellent' },
  { student: 'Amina Nwosu', admission: 'BFS-152', className: 'JSS3', subjects: 'Basic Technology, Basic Science, Civic Education', average: '69%', status: 'Good' },
  { student: 'Uche Eze', admission: 'BFS-153', className: 'JSS3', subjects: 'Civic Education, English, Basic Science', average: '62%', status: 'Credit' },
  { student: 'Amina Nnamdi', admission: 'BFS-154', className: 'JSS3', subjects: 'Social Studies, Agricultural Science, Physical Education', average: '65%', status: 'Good' },
  { student: 'Chiamaka Chinedu', admission: 'BFS-155', className: 'JSS3', subjects: 'Home Economics, French, Agricultural Science', average: '47%', status: 'Needs Improvement' },
  { student: 'Fatima Balogun', admission: 'BFS-156', className: 'JSS3', subjects: 'Basic Technology, English, Computer Studies', average: '85%', status: 'Excellent' },
  { student: 'Sani Okafor', admission: 'BFS-157', className: 'JSS3', subjects: 'Physical Education, CRS, English', average: '41%', status: 'Needs Improvement' },
  { student: 'Faith Mustapha', admission: 'BFS-158', className: 'JSS3', subjects: 'Home Economics, Physical Education, Basic Science', average: '41%', status: 'Needs Improvement' },
  { student: 'Joseph Nwosu', admission: 'BFS-159', className: 'JSS3', subjects: 'Basic Science, Mathematics, Computer Studies', average: '42%', status: 'Needs Improvement' },
  { student: 'Michael Anyanwu', admission: 'BFS-160', className: 'JSS3', subjects: 'Basic Technology, Civic Education, Mathematics', average: '94%', status: 'Excellent' },
  { student: 'Bashir Abubakar', admission: 'BFS-161', className: 'JSS3', subjects: 'Computer Studies, Physical Education, English', average: '77%', status: 'Very Good' },
  { student: 'Emeka Garba', admission: 'BFS-162', className: 'JSS3', subjects: 'French, Computer Studies, Physical Education', average: '71%', status: 'Good' },
  { student: 'Chinwe Njoku', admission: 'BFS-163', className: 'JSS3', subjects: 'Social Studies, Basic Technology, CRS', average: '53%', status: 'Credit' },
  { student: 'Aisha Nnamdi', admission: 'BFS-164', className: 'JSS3', subjects: 'Basic Science, French, Social Studies', average: '67%', status: 'Good' },
  { student: 'Patience Njoku', admission: 'BFS-165', className: 'JSS3', subjects: 'Mathematics, English, Agricultural Science', average: '77%', status: 'Very Good' },
  { student: 'Bashir Bello', admission: 'BFS-166', className: 'JSS3', subjects: 'Mathematics, Home Economics, Basic Technology', average: '70%', status: 'Good' },
  { student: 'Aisha Adeyemi', admission: 'BFS-167', className: 'JSS3', subjects: 'CRS, Mathematics, Basic Technology', average: '61%', status: 'Credit' },
  { student: 'Halima Chukwu', admission: 'BFS-168', className: 'JSS3', subjects: 'Agricultural Science, Home Economics, Social Studies', average: '77%', status: 'Very Good' },
  { student: 'Emmanuel Adekunle', admission: 'BFS-169', className: 'JSS3', subjects: 'English, French, Home Economics', average: '57%', status: 'Credit' },
  { student: 'Rukayat Bello', admission: 'BFS-170', className: 'JSS3', subjects: 'Basic Science, Social Studies, Mathematics', average: '94%', status: 'Excellent' },
  { student: 'Ngozi Chinedu', admission: 'BFS-171', className: 'JSS3', subjects: 'Home Economics, Basic Science, Social Studies', average: '56%', status: 'Credit' },
  { student: 'Chukwuemeka Eze', admission: 'BFS-172', className: 'JSS3', subjects: 'Physical Education, CRS, Basic Technology', average: '81%', status: 'Very Good' },
  { student: 'Ada Anyanwu', admission: 'BFS-173', className: 'JSS3', subjects: 'Social Studies, Home Economics, Agricultural Science', average: '54%', status: 'Credit' },
  { student: 'Tunde Nwosu', admission: 'BFS-174', className: 'JSS3', subjects: 'French, Civic Education, Social Studies', average: '40%', status: 'Needs Improvement' },
  { student: 'Amina Umeh', admission: 'BFS-175', className: 'JSS3', subjects: 'Basic Science, French, Social Studies', average: '48%', status: 'Needs Improvement' },
  { student: 'Suleiman Ogundele', admission: 'BFS-176', className: 'SS1', subjects: 'Geography, Economics, Physics', average: '38%', status: 'Needs Improvement' },
  { student: 'Chidi Nwosu', admission: 'BFS-177', className: 'SS1', subjects: 'Biology, English, Economics', average: '61%', status: 'Credit' },
  { student: 'Faith Ibe', admission: 'BFS-178', className: 'SS1', subjects: 'Biology, Economics, Mathematics', average: '40%', status: 'Needs Improvement' },
  { student: 'Victor Suleiman', admission: 'BFS-179', className: 'SS1', subjects: 'English, Government, Mathematics', average: '81%', status: 'Very Good' },
  { student: 'Kelechi Yakubu', admission: 'BFS-180', className: 'SS1', subjects: 'Mathematics, Government, Economics', average: '73%', status: 'Good' },
  { student: 'Rita Ojo', admission: 'BFS-181', className: 'SS1', subjects: 'Biology, Chemistry, Economics', average: '48%', status: 'Needs Improvement' },
  { student: 'Samuel Sadiq', admission: 'BFS-182', className: 'SS1', subjects: 'Economics, English, Mathematics', average: '85%', status: 'Excellent' },
  { student: 'Ahmad Obi', admission: 'BFS-183', className: 'SS1', subjects: 'Economics, Chemistry, Biology', average: '48%', status: 'Needs Improvement' },
  { student: 'Chiamaka Bello', admission: 'BFS-184', className: 'SS1', subjects: 'Economics, English, Geography', average: '68%', status: 'Good' },
  { student: 'Precious Eze', admission: 'BFS-185', className: 'SS1', subjects: 'Literature, Government, Biology', average: '90%', status: 'Excellent' },
  { student: 'Precious Abubakar', admission: 'BFS-186', className: 'SS1', subjects: 'English, Chemistry, Literature', average: '59%', status: 'Credit' },
  { student: 'Obinna Anyanwu', admission: 'BFS-187', className: 'SS1', subjects: 'Mathematics, Physics, Biology', average: '79%', status: 'Very Good' },
  { student: 'Joseph Nnamdi', admission: 'BFS-188', className: 'SS1', subjects: 'Geography, Government, English', average: '45%', status: 'Needs Improvement' },
  { student: 'Aisha Chukwu', admission: 'BFS-189', className: 'SS1', subjects: 'Physics, English, Literature', average: '76%', status: 'Very Good' },
  { student: 'Peter Suleiman', admission: 'BFS-190', className: 'SS1', subjects: 'Government, Economics, Physics', average: '70%', status: 'Good' },
  { student: 'Chidi Nnamdi', admission: 'BFS-191', className: 'SS1', subjects: 'Chemistry, Physics, English', average: '83%', status: 'Very Good' },
  { student: 'Peter Yusuf', admission: 'BFS-192', className: 'SS1', subjects: 'Geography, Chemistry, Biology', average: '65%', status: 'Good' },
  { student: 'Ifeoma Yakubu', admission: 'BFS-193', className: 'SS1', subjects: 'Government, Geography, Literature', average: '92%', status: 'Excellent' },
  { student: 'Chidi Chinedu', admission: 'BFS-194', className: 'SS1', subjects: 'Physics, Geography, Government', average: '64%', status: 'Credit' },
  { student: 'Chiamaka Balogun', admission: 'BFS-195', className: 'SS1', subjects: 'Geography, Biology, Mathematics', average: '64%', status: 'Credit' },
  { student: 'Rukayat Nnamdi', admission: 'BFS-196', className: 'SS1', subjects: 'Biology, Physics, Chemistry', average: '73%', status: 'Good' },
  { student: 'Amina Balogun', admission: 'BFS-197', className: 'SS1', subjects: 'Physics, Chemistry, Literature', average: '88%', status: 'Excellent' },
  { student: 'Faith Ojo', admission: 'BFS-198', className: 'SS1', subjects: 'Government, Literature, Chemistry', average: '66%', status: 'Good' },
  { student: 'Michael Eze', admission: 'BFS-199', className: 'SS1', subjects: 'Geography, Literature, Economics', average: '95%', status: 'Excellent' },
  { student: 'Suleiman Chukwu', admission: 'BFS-200', className: 'SS1', subjects: 'Mathematics, Physics, Literature', average: '80%', status: 'Very Good' },
  { student: 'Ahmad Nwosu', admission: 'BFS-201', className: 'SS2', subjects: 'Chemistry, Physics, Mathematics', average: '89%', status: 'Excellent' },
  { student: 'Fatima Adeyemi', admission: 'BFS-202', className: 'SS2', subjects: 'English, Geography, Mathematics', average: '68%', status: 'Good' },
  { student: 'Sadiq Anyanwu', admission: 'BFS-203', className: 'SS2', subjects: 'Mathematics, Literature, Chemistry', average: '94%', status: 'Excellent' },
  { student: 'Ada Danjuma', admission: 'BFS-204', className: 'SS2', subjects: 'Chemistry, Economics, Geography', average: '63%', status: 'Credit' },
  { student: 'Kelechi Adeyemi', admission: 'BFS-205', className: 'SS2', subjects: 'English, Mathematics, Economics', average: '65%', status: 'Good' },
  { student: 'Precious Chukwu', admission: 'BFS-206', className: 'SS2', subjects: 'Geography, Literature, English', average: '73%', status: 'Good' },
  { student: 'Kelechi Njoku', admission: 'BFS-207', className: 'SS2', subjects: 'Mathematics, Literature, Geography', average: '89%', status: 'Excellent' },
  { student: 'Kalu Yakubu', admission: 'BFS-208', className: 'SS2', subjects: 'Geography, Government, Economics', average: '95%', status: 'Excellent' },
  { student: 'Zainab Ojo', admission: 'BFS-209', className: 'SS2', subjects: 'Geography, Economics, Literature', average: '96%', status: 'Excellent' },
  { student: 'Ejiro Ogundele', admission: 'BFS-210', className: 'SS2', subjects: 'Biology, Literature, Chemistry', average: '54%', status: 'Credit' },
  { student: 'Patience Abubakar', admission: 'BFS-211', className: 'SS2', subjects: 'Physics, Literature, Government', average: '53%', status: 'Credit' },
  { student: 'Ifeoma Ogunleye', admission: 'BFS-212', className: 'SS2', subjects: 'Physics, Chemistry, Biology', average: '59%', status: 'Credit' },
  { student: 'Chinwe Sadiq', admission: 'BFS-213', className: 'SS2', subjects: 'Geography, Mathematics, Literature', average: '47%', status: 'Needs Improvement' },
  { student: 'Precious Nnamdi', admission: 'BFS-214', className: 'SS2', subjects: 'Biology, Chemistry, English', average: '64%', status: 'Credit' },
  { student: 'Rita Umeh', admission: 'BFS-215', className: 'SS2', subjects: 'Geography, Literature, Chemistry', average: '41%', status: 'Needs Improvement' },
  { student: 'Ibrahim Lawal', admission: 'BFS-216', className: 'SS2', subjects: 'Economics, Geography, Literature', average: '75%', status: 'Very Good' },
  { student: 'Chiamaka Yusuf', admission: 'BFS-217', className: 'SS2', subjects: 'Economics, Literature, English', average: '60%', status: 'Credit' },
  { student: 'Victor Aliyu', admission: 'BFS-218', className: 'SS2', subjects: 'Economics, Geography, Physics', average: '85%', status: 'Excellent' },
  { student: 'Suleiman Ibe', admission: 'BFS-219', className: 'SS2', subjects: 'Chemistry, Literature, Mathematics', average: '55%', status: 'Credit' },
  { student: 'Peter Mustapha', admission: 'BFS-220', className: 'SS2', subjects: 'English, Economics, Biology', average: '80%', status: 'Very Good' },
  { student: 'Michael Obi', admission: 'BFS-221', className: 'SS2', subjects: 'Economics, Biology, Geography', average: '67%', status: 'Good' },
  { student: 'Blessing Ojo', admission: 'BFS-222', className: 'SS2', subjects: 'Geography, English, Chemistry', average: '75%', status: 'Very Good' },
  { student: 'Bashir Yakubu', admission: 'BFS-223', className: 'SS2', subjects: 'English, Mathematics, Government', average: '65%', status: 'Good' },
  { student: 'Blessing Anyanwu', admission: 'BFS-224', className: 'SS2', subjects: 'Literature, Biology, English', average: '54%', status: 'Credit' },
  { student: 'Adaeze Umeh', admission: 'BFS-225', className: 'SS2', subjects: 'Chemistry, Literature, Biology', average: '59%', status: 'Credit' },
  { student: 'Patience Sadiq', admission: 'BFS-226', className: 'SS3', subjects: 'Economics, Physics, Geography', average: '91%', status: 'Excellent' },
  { student: 'Rita Okoro', admission: 'BFS-227', className: 'SS3', subjects: 'Mathematics, Literature, English', average: '85%', status: 'Excellent' },
  { student: 'Funke Abubakar', admission: 'BFS-228', className: 'SS3', subjects: 'Mathematics, English, Economics', average: '39%', status: 'Needs Improvement' },
  { student: 'Kelechi Eze', admission: 'BFS-229', className: 'SS3', subjects: 'English, Biology, Mathematics', average: '46%', status: 'Needs Improvement' },
  { student: 'Uche Yakubu', admission: 'BFS-230', className: 'SS3', subjects: 'Mathematics, Chemistry, Literature', average: '82%', status: 'Very Good' },
  { student: 'Aisha Aliyu', admission: 'BFS-231', className: 'SS3', subjects: 'Government, Biology, Physics', average: '76%', status: 'Very Good' },
  { student: 'Suleiman Ogunleye', admission: 'BFS-232', className: 'SS3', subjects: 'Mathematics, Biology, Literature', average: '44%', status: 'Needs Improvement' },
  { student: 'Faith Yusuf', admission: 'BFS-233', className: 'SS3', subjects: 'Physics, Economics, Chemistry', average: '83%', status: 'Very Good' },
  { student: 'Fatima Nwosu', admission: 'BFS-234', className: 'SS3', subjects: 'Chemistry, Mathematics, Government', average: '87%', status: 'Excellent' },
  { student: 'Victor Anyanwu', admission: 'BFS-235', className: 'SS3', subjects: 'Mathematics, English, Biology', average: '72%', status: 'Good' },
  { student: 'Peter Yakubu', admission: 'BFS-236', className: 'SS3', subjects: 'Government, Mathematics, Physics', average: '79%', status: 'Very Good' },
  { student: 'Rita Lawal', admission: 'BFS-237', className: 'SS3', subjects: 'Literature, Mathematics, Chemistry', average: '61%', status: 'Credit' },
  { student: 'Ada Sadiq', admission: 'BFS-238', className: 'SS3', subjects: 'Literature, Biology, Chemistry', average: '49%', status: 'Needs Improvement' },
  { student: 'Amaka Adekunle', admission: 'BFS-239', className: 'SS3', subjects: 'Physics, Literature, Chemistry', average: '65%', status: 'Good' },
  { student: 'Amaka Danjuma', admission: 'BFS-240', className: 'SS3', subjects: 'Physics, Government, Economics', average: '53%', status: 'Credit' },
  { student: 'Emeka Okoro', admission: 'BFS-241', className: 'SS3', subjects: 'Literature, Chemistry, Economics', average: '67%', status: 'Good' },
  { student: 'Bashir Ojo', admission: 'BFS-242', className: 'SS3', subjects: 'Economics, Government, English', average: '69%', status: 'Good' },
  { student: 'Chinwe Chukwu', admission: 'BFS-243', className: 'SS3', subjects: 'Literature, Chemistry, Biology', average: '89%', status: 'Excellent' },
  { student: 'Aisha Umeh', admission: 'BFS-244', className: 'SS3', subjects: 'Physics, Geography, Literature', average: '38%', status: 'Needs Improvement' },
  { student: 'Comfort Eze', admission: 'BFS-245', className: 'SS3', subjects: 'Mathematics, Chemistry, Government', average: '64%', status: 'Credit' },
  { student: 'Maryam Ibe', admission: 'BFS-246', className: 'SS3', subjects: 'Chemistry, Literature, Government', average: '83%', status: 'Very Good' },
  { student: 'Maryam Ogundele', admission: 'BFS-247', className: 'SS3', subjects: 'English, Mathematics, Biology', average: '52%', status: 'Credit' },
  { student: 'Musa Ogunleye', admission: 'BFS-248', className: 'SS3', subjects: 'Chemistry, Physics, Government', average: '75%', status: 'Very Good' },
  { student: 'Segun Mustapha', admission: 'BFS-249', className: 'SS3', subjects: 'Geography, Government, Chemistry', average: '85%', status: 'Excellent' },
  { student: 'Ejiro Umeh', admission: 'BFS-250', className: 'SS3', subjects: 'Government, Literature, Biology', average: '57%', status: 'Credit' },
];
const tbody = document.getElementById('results-body');
const statusMessage = document.getElementById('status-message');
const form = document.getElementById('search-form');
const input = document.getElementById('student-search');
const studentsPublishedEl = document.getElementById('students-published');
const passRateEl = document.getElementById('pass-rate');
const topPerformerEl = document.getElementById('top-performer');

function computeStats() {
  const total = results.length;
  const passCount = results.filter((r) => parseInt(r.average) >= 50).length;
  const passRate = total ? Math.round((passCount / total) * 100) : 0;
  const top = results.reduce((best, r) => {
    const avg = parseInt(r.average);
    return avg > parseInt(best.average) ? r : best;
  }, results[0]);

  if (studentsPublishedEl) studentsPublishedEl.textContent = total;
  if (passRateEl) passRateEl.textContent = `${passRate}%`;
  if (topPerformerEl) topPerformerEl.textContent = top ? top.student : '-';
}

function renderResults(items) {
  tbody.innerHTML = '';

  if (!items.length) {
    tbody.innerHTML = '<tr><td colspan="6">No results found. Try another name or admission number.</td></tr>';
    statusMessage.textContent = 'No matching students found.';
    return;
  }

  const rows = items.map((item) => `
    <tr>
      <th scope="row">${item.student}</th>
      <td>${item.admission}</td>
      <td>${item.className}</td>
      <td>${item.subjects}</td>
      <td>${item.average}</td>
      <td>${item.status}</td>
    </tr>
  `).join('');

  tbody.innerHTML = rows;
  statusMessage.textContent = `Showing ${items.length} student${items.length === 1 ? '' : 's'}.`;
}

function filterResults(term) {
  const query = term.trim().toLowerCase();
  if (!query) {
    renderResults(results);
    return;
  }

  const filtered = results.filter((item) => {
    return [item.student, item.admission, item.className].some((value) => value.toLowerCase().includes(query));
  });

  renderResults(filtered);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  filterResults(input.value);
});

input.addEventListener('input', () => {
  filterResults(input.value);
});

computeStats();
renderResults(results);
