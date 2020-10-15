package com.balloon.events.repository;
import com.balloon.events.domain.ERole;
import com.balloon.events.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);

}
