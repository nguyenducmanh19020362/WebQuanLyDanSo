<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalInfomationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_infomations', function (Blueprint $table) {
            $table->id();
            $table->string('CCCD')->nullable();
            $table->string('Hovaten');
            $table->string('Ngaysinh');
            $table->string('Gioitinh');
            $table->string('Quequan');
            $table->string('Diachithuongtru');
            $table->string('Diachitamtru');
            $table->string('Tongiao');
            $table->string('Trinhdovanhoa');
            $table->string('Nghenghiep');
            $table->string('Ma');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_infomations');
    }
}
