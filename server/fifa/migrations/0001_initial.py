# Generated by Django 3.2.3 on 2021-05-29 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fifa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player_id', models.IntegerField()),
                ('name', models.CharField(max_length=120)),
                ('nationality', models.CharField(default='SOME STRING', max_length=120)),
                ('position', models.CharField(default='SOME STRING', max_length=120)),
                ('overall', models.IntegerField()),
                ('age', models.IntegerField()),
                ('hits', models.IntegerField()),
                ('potential', models.IntegerField()),
                ('team', models.CharField(max_length=120)),
            ],
        ),
    ]
