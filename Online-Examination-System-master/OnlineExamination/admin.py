from django.contrib import admin
from .models import Student, Question, Exams, Section

admin.site.site_header = ""


class QuestionModelAdmin(admin.ModelAdmin):
    list_display = ["question", "exam_name", "marks"]

    class Meta:
        model = Question


admin.site.register(Question, QuestionModelAdmin)
admin.site.register(Student)
admin.site.register(Section)


class ExamModelAdmin(admin.ModelAdmin):
    list_display = ["exam_name", "total_ques", "total_marks", "time_duration"]


admin.site.register(Exams, ExamModelAdmin)



