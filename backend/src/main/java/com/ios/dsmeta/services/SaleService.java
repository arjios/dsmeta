package com.ios.dsmeta.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ios.dsmeta.entities.Sale;
import com.ios.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository saleRepository;
	
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		LocalDate min = LocalDate.parse(minDate);
		LocalDate max = LocalDate.parse(maxDate);
		return saleRepository.findSales(min, max, pageable);
	}
}
